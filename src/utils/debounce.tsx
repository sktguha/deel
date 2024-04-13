import { genericFn } from "../components/AutoComplete.types";

export default function debounce(func: genericFn, timeout = 300) {
    let timer: number;
    return (...args: any[]) => {
      clearTimeout(timer);
      // @ts-expect-error
      timer = setTimeout(() => { func.apply(this, args); }, timeout) as unknown as number;
    };
}