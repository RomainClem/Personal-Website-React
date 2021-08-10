import * as React from 'react'
import { Link, Route } from 'react-router-dom'

/*
TODO:
      - Revise this system to make it work somehow
 */

class LiNavLink extends React.Component<any, {}> {
    render() {
        const {to, exact, strict, activeClassName, className, activeStyle, style, isActive: getIsActive, ...rest } = this.props;
        return (
            <Route
                path={typeof to === 'object' ? to.pathname : to}
                exact={exact}
                strict={strict}
                children={({ location, match }) => {
                    const isActive = !!(getIsActive ? getIsActive(match, location) : match)

                    return (
                        <li className={"nav-item " + isActive ? [activeClassName, className].join('') : className} style={isActive ? { ...style, ...activeStyle } : style}>
                            <Link className="nav-link px-2 text-white" to={to} {...rest} />
                        </li>
                    )
                }}
            />
        );
    }
}

export default LiNavLink;