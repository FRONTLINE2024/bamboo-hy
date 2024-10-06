import component from '../../common/components';

function feed() {
    return `
        <div>feed</div>
        ${component.writingItem({content: 'test', image: [], nickname: '한리미', date: '2024-10-01', isWrite: false})}
        ${component.writingButton()}
    `;
}

export default feed;