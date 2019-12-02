import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Children(props) {
    const { text, tint, ...rest } = props

    return (
        <Frame
            {...rest}
            background={tint}
            whileHover={{
                scale: 1.1,
            }}
            style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
            }}
        >
            {text}
        </Frame>
    )
}

Children.defaultProps = {
    height: 128,
    width: 240,
    text: "Hello World",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Children, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: this.children,
    },
    tint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: "green",
    },

    
})


addPropertyControls(Children, {
    children: {
      type: ControlType.ComponentInstance,
    },
  })
