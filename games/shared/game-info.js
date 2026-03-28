/**
 * Shared script to load and render game_info.md
 */
async function loadGameInfo() {
    const content = document.getElementById('description-content');
    if (!content) return;

    try {
        const response = await fetch('game_info.md');
        if (!response.ok) throw new Error('Failed to load game_info.md');
        const markdown = await response.text();
        
        // Ensure marked is available
        if (typeof marked !== 'undefined') {
            content.innerHTML = marked.parse(markdown);
        } else {
            // Fallback if marked is missing (though it should be included)
            content.innerHTML = '<pre>' + markdown + '</pre>';
        }
    } catch (error) {
        console.error('Error loading game description:', error);
        content.innerHTML = '<p style="color: #ef4444;">Error loading description. Please ensure game_info.md exists.</p>';
    }
}

// Auto-load if the element exists
document.addEventListener('DOMContentLoaded', loadGameInfo);
