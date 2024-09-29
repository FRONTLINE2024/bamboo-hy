function button({ btnName, isMain }) {
    const className = isMain ? 'main-button' : 'sub-button';
    return `<button class=${className}>${btnName}</button>`
}
export default button;