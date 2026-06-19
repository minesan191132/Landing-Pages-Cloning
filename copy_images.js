const fs = require('fs');
const path = require('path');

const srcFiles = {
  'day-plan.webp': 'C:\\Users\\trong\\.gemini\\antigravity\\brain\\943a30dc-ca18-4f3d-879a-0a0e594e6c13\\day_plan_1781842213644.png',
  'ai-search.webp': 'C:\\Users\\trong\\.gemini\\antigravity\\brain\\943a30dc-ca18-4f3d-879a-0a0e594e6c13\\ai_search_1781842223603.png',
  'ai-meeting-assistant.webp': 'C:\\Users\\trong\\.gemini\\antigravity\\brain\\943a30dc-ca18-4f3d-879a-0a0e594e6c13\\ai_meeting_assistant_1781842235156.png',
  'document-digitization.webp': 'C:\\Users\\trong\\.gemini\\antigravity\\brain\\943a30dc-ca18-4f3d-879a-0a0e594e6c13\\document_digitization_1781842519039.png',
  'suitability-report.webp': 'C:\\Users\\trong\\.gemini\\antigravity\\brain\\943a30dc-ca18-4f3d-879a-0a0e594e6c13\\suitability_report_1781842532750.png',
  'portfolio-aggregation.webp': 'C:\\Users\\trong\\.gemini\\antigravity\\brain\\943a30dc-ca18-4f3d-879a-0a0e594e6c13\\portfolio_aggregation_1781842545756.png',
  'client-emails.webp': 'C:\\Users\\trong\\.gemini\\antigravity\\brain\\943a30dc-ca18-4f3d-879a-0a0e594e6c13\\client_emails_1781842558736.png'
};

const targetDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

for (const [targetName, srcPath] of Object.entries(srcFiles)) {
  const targetPath = path.join(targetDir, targetName);
  try {
    fs.copyFileSync(srcPath, targetPath);
    console.log(`Copied ${targetName} to public/images/`);
  } catch (err) {
    console.error(`Failed to copy ${targetName}:`, err.message);
  }
}

console.log('Done copying images!');
