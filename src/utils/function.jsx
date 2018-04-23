export function px2rem(px){
    const rem = ((414/375)*12);
    return `${(px/rem)}rem`;
};