import ExpandButton from './ExpandButton';
import styled from 'styled-components';

function makeMenuMobileStyle(width, app, expanded, Menu) {
    if (app.isMobile(width)) {
        return styled(Menu)`
            position: absolute;
            display: block;
            width: ${width};
            ${() => {
                if (expanded) {
                    return `left: 0`;
                }
                return `left: ${width}`;
            }};
        `;
    }
    return Menu;
}

function getExpandButton(width, app) {
    if (app.isMobile(width)) {
        return <ExpandButton/>
    }
    return null;
}

export {
    makeMenuMobileStyle,
    getExpandButton
}