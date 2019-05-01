let colorReg = /^#|rgb/;
let fontWeightReg = /^normal|bold|bolder$/;
let flexDirectionReg = /^row|row-reverse|column|column-reverse$/;
let flexWrapReg = /^wrap|nowrap$/;
// let percentReg = /^\d+%$/;

let parsers = {
    // margin: 10
    // margin: [10, 20, 10]
    // margin: '10 20'
    margin(value) {
        return quarter('margin', value);
    },

    // padding: 10
    // padding: [10, 20, 10]
    // padding: '10 20'
    padding(value) {
        return quarter('padding', value);
    },

    // borderWidth: 10
    // borderWidth: [10, 20, 10]
    // borderWidth: '10 20'
    borderWidth(value) {
        return quarter('borderWidth', value);
    },

    // borderRadius: 10
    // borderRadius: [10, 20, 10]
    // borderRadius: '10 20'
    borderRadius(value) {
        return quarter('borderRadius', value);
    },

    // background: 'red'
    background(value) {
        return {
            backgroundColor: value
        };
    },

    // scale: 1
    scale(value) {
        return {
            scaleX: value,
            scaleY: value
        };
    },

    // rotate: 30
    // rotate: '30rad'
    rotate(value) {
        return {
            rotateZ: typeof value === 'string' ? value : `${value}deg`
        };
    },

    // font: 12
    // font: '12 24 #000 bold "Microsoft YaHei"'
    // font: [12, 24 '#000', 'bold', 'Microsoft YaHei']
    font(value) {
        let style = {};
        value = partition(value);
        value.forEach(x => {
            if (colorReg.test(x)) {
                style.color = x;
            } else if (fontWeightReg.test(x)) {
                style.fontWeight = x;
            } else if (typeof x === 'number' && !('fontSize' in style)) {
                style.fontSize = x;
            } else if (typeof x === 'number' && !('lineHeight' in style)) {
                style.lineHeight = x;
            } else if (typeof x === 'string') {
                style.fontFamily = x;
            }
        });
        return style;
    },

    // shadow: '#000 5 5 10 0.5'
    // shadow: ['#000', 5, 5, 10, 0.5]
    shadow(value) {
        let style = {};
        value = partition(value);
        value.forEach(x => {
            if (colorReg.test(x)) {
                style.shadowColor = x;
            } else if (typeof x === 'number') {
                if (!('shadowOffset' in style)) {
                    style.shadowOffset = {
                        width: x
                    };
                } else if (
                    style.shadowOffset &&
                    !('height' in style.shadowOffset)
                ) {
                    style.shadowOffset.height = x;
                } else if (!('shadowRadius' in style) && x % 1 === 0) {
                    style.shadowRadius = x;
                } else {
                    style.shadowOpacity = x;
                }
            }
        });
        return style;
    },

    // size: 10
    // size: '10 20'
    // size: [10, 20]
    size(value) {
        value = partition(value);
        return {
            width: value[0],
            height: value[1] === undefined ? value[0] : value[1]
        };
    },

    // box: 1
    // box: '1 stretch center column wrap'
    // box: [1, 'stretch', 'center', 'column', 'warp']
    box(value) {
        let style = {};
        value = partition(value);
        value.forEach(x => {
            if (typeof x === 'number') {
                style.flex = x;
            } else if (flexDirectionReg.test(x)) {
                style.flexDirection = x;
            } else if (flexWrapReg.test(x)) {
                style.flexWrap = x;
            } else if (!('alignItems' in style)) {
                style.alignItems = x;
            } else {
                style.justifyContent = x;
            }
        });
        return style;
    },

    // item: 1
    // item: '1 start center'
    // item: [1, 'start', 'center']
    item(value) {
        let style = {};
        value = partition(value);
        value.forEach(x => {
            if (typeof x === 'number') {
                style.flex = x;
            } else if (!('alignItem' in style)) {
                style.alignItem = x;
            } else {
                style.alignContent = x;
            }
        });
        return style;
    },

    // lrtb: '10 10 20 30'
    // lrtb: [10, 10, 20, 30]
    lrtb(value) {
        value = partition(value);
        return {
            position: 'absolute',
            left: value[0],
            right: value[1],
            top: value[2],
            bottom: value[3]
        };
    },

    // lt: '10 10'
    // lt: [10, 10]
    lt(value) {
        value = partition(value);
        return {
            position: 'absolute',
            left: value[0],
            top: value[1]
        };
    },

    // rt: '10 10'
    // rt: [10, 10]
    rt(value) {
        value = partition(value);
        return {
            position: 'absolute',
            right: value[0],
            top: value[1]
        };
    },

    // lb: '10 10'
    // lb: [10, 10]
    lb(value) {
        value = partition(value);
        return {
            position: 'absolute',
            left: value[0],
            bottom: value[1]
        };
    },

    // rb: '10 10'
    // rb: [10, 10]
    rb(value) {
        value = partition(value);
        return {
            position: 'absolute',
            right: value[0],
            bottom: value[1]
        };
    },

    lrtb(value) {
        value = partition(value);
        return {
            position: 'absolute',
            left: value[0],
            right: value[1],
            top: value[2],
            bottom: value[3]
        };
    }

};

function partition(value) {
    if (typeof value === 'string') {
        value = value
            .replace(/'/g, '"')
            .replace(/"(.*?)"/g, ($0, $1) => $1.replace(' ', '\\s'))
            .split(' ')
            .map(x => x.replace('\\s', ' '));
    }
    if (!Array.isArray(value)) {
        value = [value];
    }
    return value;
}

function quarter(name, value) {
    let config = {
        padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
        margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
        borderWidth: [
            'borderTopWidth',
            'borderRightWidth',
            'borderBottomWidth',
            'borderLeftWidth'
        ],
        borderRadius: [
            'borderTopLeftRadius',
            'borderTopRightRadius',
            'borderBottomRightRadius',
            'borderBottomLeftRadius'
        ]
    };
    let style = {};
    let attrs = config[name];
    value = partition(value);
    if (value.length === 1) {
        style[name] = value[0];
    } else if (value.length === 2) {
        style[attrs[0]] = value[0];
        style[attrs[2]] = value[0];
        style[attrs[1]] = value[1];
        style[attrs[3]] = value[1];
    } else if (value.length === 3) {
        style[attrs[0]] = value[0];
        style[attrs[2]] = value[2];
        style[attrs[1]] = value[1];
        style[attrs[3]] = value[1];
    } else if (value.length === 4) {
        style[attrs[0]] = value[0];
        style[attrs[1]] = value[1];
        style[attrs[2]] = value[2];
        style[attrs[3]] = value[3];
    }
    return style;
}

export default function moss(style) {
    let parsed = {};
    for (let key in style) {
        let value = style[key];
        if (
            Array.isArray(value) ||
            typeof value === 'number' ||
            typeof value === 'string'
        ) {
            let parser = parsers[key];
            if (parser) {
                Object.assign(parsed, parser(value));
            } else {
                parsed[key] = value;
            }
        } else if (typeof value !== 'function'){
            parsed[key] = moss(value);
        } else {
            parsed[key] = value;
        }
    }
    return parsed;
}

export const Parsers = parsers;
