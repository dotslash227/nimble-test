export default function getMonths(d1){
    let d2 = new Date();
    let months = 0;
    d1 = new Date(d1);
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}