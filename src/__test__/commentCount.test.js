import { displayCommentCount } from '../modules/popupwindow.js';

describe('Comment Count', () => {
  test('should display the correct comment count', () => {
    document.body.innerHTML = `
      <div class="commentContainer">
        <h2>Comments (<span class="comment-count">0</span>)</h2>
      </div>
    `;

    const initialCount = 5;

    displayCommentCount(initialCount);

    const commentCountElement = document.querySelector('.comment-count');

    expect(commentCountElement).toBeDefined();
    expect(commentCountElement.textContent).toBe(initialCount.toString());
  });

  test('should update the comment count', () => {
    document.body.innerHTML = `
      <div class="commentContainer">
        <h2>Comments (<span class="comment-count">0</span>)</h2>
      </div>
    `;

    const initialCount = 3;

    displayCommentCount(initialCount);

    const commentCountElement = document.querySelector('.comment-count');

    expect(commentCountElement).toBeDefined();
    expect(commentCountElement.textContent).toBe(initialCount.toString());

    const updatedCount = 7;

    displayCommentCount(updatedCount);

    expect(commentCountElement.textContent).toBe(updatedCount.toString());
  });
});
