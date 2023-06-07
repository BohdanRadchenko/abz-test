import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import "./typography.scss";
import { Tooltip } from "@mui/material";

export const enum ETypographyType {
  HEADING = "heading",
  BODY = "body",
}

export const enum ETypographyAlign {
  CENTER = "center",
  LEFT = "left",
}

export const enum ETypographyColor {
  WHITE = "white",
  BLACK = "black",
}

interface ITypography {
  children: string;
  className?: string;
  type?: ETypographyType;
  align?: ETypographyAlign;
  color?: ETypographyColor;
  style?: CSSProperties;
}

export const Typography: FC<ITypography> = ({
                                              children,
                                              className,
                                              type = ETypographyType.BODY,
                                              align = ETypographyAlign.CENTER,
                                              color = ETypographyColor.BLACK,
                                              style,
                                            }) => {
  const [collapses, setCollapses] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if ( !ref || !ref.current ) return;
    const current = ref.current;
    const parent = ref.current.parentElement;
    if ( !parent ) return;
    if ( parent.offsetWidth < current.offsetWidth ) {
      setCollapses(true);
    }
  }, [ref]);

  return (
    <Tooltip
      title={children}
      placement="bottom"
      disableHoverListener={!collapses}
    >
      <p
        ref={ref}
        className={`typography type-${type} align-${align} color-${color} ${className} ${collapses && "collapses"}`}
        style={{ ...style }}
      >
        {children}
      </p>
    </Tooltip>
  );
}
