
function renderLicenseBadge(license) {

  let licenseChoice = `${license}`;
  let badge = '';

  if (licenseChoice === 'Apache license 2.0') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  
  } else if (licenseChoice === 'Boost Software License 1.0') {
    badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  
  } else if (licenseChoice === 'BSD 3-Clause License') {
    badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  
  } else if (licenseChoice === 'BSD 2-Clause License') {
    badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';

  } else if (licenseChoice === 'CC0') {
    badge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';

  } else if (licenseChoice === 'Attribution 4.0 International') {
    badge = '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)';

  } else if (licenseChoice === 'Attribution-ShareAlike 4.0 International') {
    badge = '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)';

  } else if (licenseChoice === 'Attribution-NonCommercial 4.0 International') {
    badge = '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)';

  } else if (licenseChoice === 'Attribution-NoDerivates 4.0 International') {
    badge = '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)';

  } else if (licenseChoice === 'Attribution-NonCommmercial-ShareAlike 4.0 International') {
    badge = '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)';

  } else if (licenseChoice === 'Attribution-NonCommercial-NoDerivatives 4.0 International') {
    badge = '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)';

  } else if (licenseChoice === 'Eclipse Public License 1.0') {
    badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    
  } else if (licenseChoice === 'GNU GPL v3') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    
  } else if (licenseChoice === 'GNU GPL v2') {
    badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    
  } else if (licenseChoice === 'GNU AGPL v3') {
    badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    
  } else if (licenseChoice === 'GNU LGPL v3') {
    badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    
  } else if (licenseChoice === 'GNU FDL v1.3') {
    badge = '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)';
    
  } else if (licenseChoice === 'The Hippocratic License 2.1') {
    badge = '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)';
    
  } else if (licenseChoice === 'The Hippocratic License 3.0') {
    badge = '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)';
    
  } else if (licenseChoice === 'IBM Public License Version 1.0') {
    badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    
  } else if (licenseChoice === 'ISC License (ISC)') {
    badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    
  } else if (licenseChoice === 'MIT License') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    
  } else if (licenseChoice === 'Mozilla Public License 2.0') {
    badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    
  } else if (licenseChoice === 'Attribution License (BY)') {
    badge = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
    
  } else if (licenseChoice === 'Open Database License (ODbL)') {
    badge = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)';
    
  } else if (licenseChoice === 'Public Domain Dedication and License (PDDL)') {
    badge = '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)';
    
  } else if (licenseChoice === 'Perl License') {
    badge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    
  } else if (licenseChoice === 'Artistic License 2.0') {
    badge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    
  } else if (licenseChoice === 'SIL Open Font License 1.1') {
    badge = '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
    
  } else if (licenseChoice === 'The Unlicense') {
    badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    
  } else if (licenseChoice === 'Do What the Fuck You Want to Public License') {
    badge = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
    
  } else if (licenseChoice === 'The zlib/libpng License') {
    badge = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
    
  } else if (licenseChoice === 'no license') {
    badge = '';

  }
  return badge;
}

function renderLicenseLink(license) {

  let licenseLink = `${license}`;
  let link = '';

  if (licenseLink === 'Apache license 2.0') {
    link = 'https://opensource.org/license/apache-2-0/';
  
  } else if (licenseLink === 'Boost Software License 1.0') {
    link = 'https://www.boost.org/LICENSE_1_0.txt';
  
  } else if (licenseLink === 'BSD 3-Clause License') {
    link = 'https://opensource.org/license/bsd-3-clause/';
  
  } else if (licenseLink === 'BSD 2-Clause License') {
    link = 'https://opensource.org/license/bsd-2-clause/';

  } else if (licenseLink === 'CC0') {
    link = 'https://creativecommons.org/publicdomain/zero/1.0/';

  } else if (licenseLink === 'Attribution 4.0 International') {
    link = 'https://creativecommons.org/licenses/by/4.0/';

  } else if (licenseLink === 'Attribution-ShareAlike 4.0 International') {
    link = 'https://creativecommons.org/licenses/by-sa/4.0/';

  } else if (licenseLink === 'Attribution-NonCommercial 4.0 International') {
    link = 'https://creativecommons.org/licenses/by-nc/4.0/';

  } else if (licenseLink === 'Attribution-NoDerivates 4.0 International') {
    link = 'https://creativecommons.org/licenses/by-nd/4.0/';

  } else if (licenseLink === 'Attribution-NonCommmercial-ShareAlike 4.0 International') {
    link = 'https://creativecommons.org/licenses/by-nc-sa/4.0/';

  } else if (licenseLink === 'Attribution-NonCommercial-NoDerivatives 4.0 International') {
    link = 'https://creativecommons.org/licenses/by-nc-nd/4.0/';

  } else if (licenseLink === 'Eclipse Public License 1.0') {
    link = 'https://opensource.org/license/epl-1-0/';
    
  } else if (licenseLink === 'GNU GPL v3') {
    link = 'https://www.gnu.org/licenses/gpl-3.0';
    
  } else if (licenseLink === 'GNU GPL v2') {
    link = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    
  } else if (licenseLink === 'GNU AGPL v3') {
    link = 'https://www.gnu.org/licenses/agpl-3.0';
    
  } else if (licenseLink === 'GNU LGPL v3') {
    link = 'https://www.gnu.org/licenses/lgpl-3.0';
    
  } else if (licenseLink === 'GNU FDL v1.3') {
    link = 'https://www.gnu.org/licenses/fdl-1.3';
    
  } else if (licenseLink === 'The Hippocratic License 2.1') {
    link = 'https://firstdonoharm.dev/';
    
  } else if (licenseLink === 'The Hippocratic License 3.0') {
    link = 'https://firstdonoharm.dev/';
    
  } else if (licenseLink === 'IBM Public License Version 1.0') {
    link = 'https://opensource.org/licenses/IPL-1.0';
    
  } else if (licenseLink === 'ISC License (ISC)') {
    link = 'https://opensource.org/license/isc-license-txt/';
    
  } else if (licenseLink === 'MIT License') {
    link = 'https://opensource.org/license/mit/';
    
  } else if (licenseLink === 'Mozilla Public License 2.0') {
    link = 'https://opensource.org/license/mpl-2-0/';
    
  } else if (licenseLink === 'Attribution License (BY)') {
    link = 'https://opendatacommons.org/licenses/by/';
    
  } else if (licenseLink === 'Open Database License (ODbL)') {
    link = 'https://opendatacommons.org/licenses/odbl/';
    
  } else if (licenseLink === 'Public Domain Dedication and License (PDDL)') {
    link = 'https://opendatacommons.org/licenses/pddl/';
    
  } else if (licenseLink === 'Perl License') {
    link = 'https://opensource.org/license/artistic-2-0/';
    
  } else if (licenseLink === 'Artistic License 2.0') {
    link = 'https://opensource.org/license/artistic-2-0/';
    
  } else if (licenseLink === 'SIL Open Font License 1.1') {
    link = 'https://opensource.org/license/ofl-1-1/';
    
  } else if (licenseLink === 'The Unlicense') {
    link = 'https://choosealicense.com/licenses/unlicense/';
    
  } else if (licenseLink === 'Do What the Fuck You Want to Public License') {
    link = 'http://www.wtfpl.net/about/';
    
  } else if (licenseLink === 'The zlib/libpng License') {
    link = 'https://opensource.org/license/zlib/';
    
  } else if (licenseLink === 'no license') {
    link = '';

  }
  return link;

}

function renderLicenseSection(license) {
  let chosenLicense = `${license}`;

}

function generateMarkdown(data) {

  const { title, description, installation, usage, credits, test, license, GitHub, email } =  data;

  return `
# ${title}

## Badges
${renderLicenseBadge(license)}

## Description
${description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
- [Test](#test)
- [License](#license)
    
## Installation
${installation}
    
## Usage
${usage}
    
## Credits
${credits}
    
## Questions
GitHub: ${GitHub}
Email: ${email}
    
## Test
${test}
  
## License
${license}
${renderLicenseLink(license)}
  `;
}

module.exports = generateMarkdown;