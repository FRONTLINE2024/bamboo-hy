import writingButton from "../../common/components/writingButton";
import writingItem from "../../common/components/writingItem";

function feed() {
    return `
        <div>feed</div>
        ${writingItem({content: 'test', image: [], nickname: '한리미', date: '2024-10-01', isWrite: false})}
        ${writingButton()}
    `;
}

export default feed;