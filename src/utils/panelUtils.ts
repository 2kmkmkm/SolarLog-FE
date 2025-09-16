export function getStatus(capability?: number) {
    if (!capability) return "-";

    if (capability >= 75) return "정상";
    else if (capability >= 65) return "주의";
    return "교체 필요";
}

export function getLeftLife(leftLife?: number){
    if (!leftLife) return "-";

    const year = Math.floor(leftLife / 12);
    const month = leftLife % 12;

    if (year === 0) return `${month}개월`;
    if (month === 0) return `${year}년`;
    return `${year}년 ${month}개월`;
}

