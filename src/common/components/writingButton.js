import { navigate } from '../../router';
import writingImg from '../assets/img-writing-button.png';

function writingButton() {
    const container = document.createElement('button');
    
    container.innerHTML = `
        <div class='writing-button'>
            <img src='${writingImg}' alt='버튼'/>
            <p>제보하기</p>
        </div>
    `;

    document.addEventListener('click', (event) => {
        if (event.target.closest('.writing-button')) {
            navigate('/post');
        }
    });

    return container.innerHTML; 
}

export default writingButton;