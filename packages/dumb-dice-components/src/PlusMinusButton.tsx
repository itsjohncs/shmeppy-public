import type {MouseEvent, ReactElement} from "react";
import {useCallback} from "react";

import {classNames} from "@shmeppy/client-utils";

import "./PlusMinusButton.css";

interface Props {
    onPlus: () => void;
    onMinus: () => void;
    disabled?: boolean;
    children: string;
    count: number;
    forceShowMinusButton?: boolean;
    className?: string;
}

function PlusMinusButton({
    onPlus,
    onMinus,
    disabled,
    children,
    count,
    forceShowMinusButton,
    className,
}: Props): ReactElement {
    const handleMouseDown = useCallback(function (
        event: MouseEvent<HTMLButtonElement>,
    ): void {
        // Prevents focus from geting pulled from text input when clicking
        // the button. Useful to prevent the virtual keyboard from hiding
        // itself on mobile.
        event.preventDefault();
    }, []);

    const handlePlus = useCallback(
        function (event: MouseEvent<HTMLButtonElement>): void {
            onPlus();

            // Prevents context menu from appearing if this was triggered by a
            // contextmenu event.
            event.preventDefault();
        },
        [onPlus],
    );

    const handleMinus = useCallback(
        function (event: MouseEvent<HTMLButtonElement>): void {
            onMinus();

            // Prevents context menu from appearing if this was triggered by a
            // contextmenu event.
            event.preventDefault();
        },
        [onMinus],
    );

    const showMinusButton =
        forceShowMinusButton || navigator.maxTouchPoints > 0;
    return (
        <div className={classNames("plus-minus-tray-button", className)}>
            {count !== 0 && <div className="count">{count}</div>}
            {showMinusButton && (
                <>
                    <button
                        className="minus"
                        onMouseDown={handleMouseDown}
                        onClick={handleMinus}
                        onContextMenu={handlePlus}
                        disabled={disabled}
                    >
                        -
                    </button>
                    <div className="spacer" />
                </>
            )}
            <button
                className={classNames({
                    plus: true,
                    alone: !showMinusButton,
                })}
                onMouseDown={handleMouseDown}
                onClick={handlePlus}
                onContextMenu={handleMinus}
                disabled={disabled}
            >
                {children}
            </button>
        </div>
    );
}

export default PlusMinusButton;
