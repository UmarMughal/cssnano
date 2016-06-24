import {mappings} from '../../lib/reduceDisplayValues';

const tests = [{
    message: 'display: block ruby (pass through)',
    fixture: 'display:block ruby',
    expected: 'display:block ruby'
}];

const data = mappings.reduce((list, mapping) => {
    list[mapping[0]] = mapping[1].join(' ');
    return list;
}, {});

Object.keys(data).forEach(key => {
    const fixture = data[key];
    tests.push({
        message: `display: ${fixture} => display: ${key}`,
        fixture: `display:${fixture}`,
        expected: `display:${key}`
    });
});

module.exports.name = 'cssnano/reduce-display-values';
module.exports.tests = tests;
