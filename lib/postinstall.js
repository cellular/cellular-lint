const fs = require('fs');
const rc = `{
  "extends": ["cellular"]
}
`;

if (!fs.existsSync('.eslintrc')) {
  fs.writeFileSync('.eslintrc', rc);
}
