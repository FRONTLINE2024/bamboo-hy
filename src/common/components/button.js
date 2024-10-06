function button({ btnName, isMain }) {
    return `<button class=${isMain}>${btnName}</button>`
}
export default button;