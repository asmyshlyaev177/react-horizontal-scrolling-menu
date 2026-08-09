import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`/**
 * Returns the value from the previous render.
 *
 * Implemented by adjusting state during render rather than writing to a ref in
 * an effect and reading \`ref.current\` back out during the next render: reading a
 * ref during render is not safe under the React Compiler, which may reorder or
 * skip renders. See https://react.dev/reference/react/useState#storing-information-from-previous-renders
 */
declare function usePrevious<T>(value: T): T | undefined;
export default usePrevious;
`})))()}n();export{t as default};