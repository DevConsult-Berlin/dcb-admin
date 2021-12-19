import React, {FC} from "react";
import {Typography, TypographyProps} from "@mui/material";

export interface TextDisplayProps {
    label?: string;
    value?: string | null;
    captionProps?: TypographyProps;
    displayProps?: TypographyProps;
}

export const TextDisplay: FC<TextDisplayProps> = ({label, value}) => (
    <Typography variant="caption" color="text.secondary">
        {label}
        <Typography color="text.primary">{value}</Typography>
    </Typography>
);
