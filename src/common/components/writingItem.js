function writingItem({content, image, nickname, date, isWrite}) {
    const imageCheck = image & image.length > 0 ? `
        <div class='writing-image'>
            <p>첨부 사진 |</p>
            ${image.map((imgSrc, idx) => `<img src=${imgSrc}/>`).join('')}
        </div>
    ` : ``;
    
    const contentField = isWrite ? `
        <textarea class='writing-content-input' placeholder='제보할 내용을 입력해주세요.'></textarea>
    ` : `
        <p class='writing-content'>${content}</p>
        ${imageCheck}
        <p class='writing-date'>제보 | ${date}</p>
    `;

    return `
        <div class='writing-item-box'>
            <div class='user-info'>
                <img/>
                <p>${nickname}</p>
            </div>
            <div class='writing-info'>
                ${contentField}
            </div>
        </div>
    `;
}
export default writingItem;