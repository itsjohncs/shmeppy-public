type ClassObject = {[k: string]: boolean | undefined | null};

function argToObject(
    arg: null | undefined | false | string | ClassObject,
): ClassObject {
    if (!arg) {
        return {};
    } else if (typeof arg === "object") {
        return arg;
    } else if (typeof arg === "string") {
        const result: ClassObject = {};
        for (const k of arg.split(" ").filter((i) => i !== "")) {
            result[k] = true;
        }
        return result;
    }

    throw new Error(`Don't know how to handle ${arg as any} in classNames`);
}

export default function classNames(
    ...args: (null | undefined | false | string | ClassObject)[]
): string {
    const obj = args.reduce<ClassObject>(function (acc, arg) {
        return {...acc, ...argToObject(arg)};
    }, {});
    return Object.entries(obj)
        .filter(([_, shouldInclude]) => shouldInclude)
        .map(([className]) => className)
        .join(" ");
}
