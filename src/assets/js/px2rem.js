export default function px2rem(px) {
    let rem = ((375 / 375) * 100);
    return (px / rem) + 'rem';
}