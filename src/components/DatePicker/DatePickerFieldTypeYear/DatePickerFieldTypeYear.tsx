import React from 'react';

import { useForkRef } from '../../../hooks/useForkRef/useForkRef';
import { maxDateDefault, minDateDefault } from '../../../utils/date';
import { TextField } from '../../TextField/TextField';
import {
  datePickerPropFormatTypeYear,
  datePickerPropPlaceholderTypeYear,
  datePickerPropSeparatorDefault,
} from '../helpers';
import { DatePickerFieldTypeYearProps, usePicker } from './helpers';

export const DatePickerFieldTypeYear = React.forwardRef<
  HTMLDivElement,
  DatePickerFieldTypeYearProps
>((props, ref) => {
  const {
    format = datePickerPropFormatTypeYear,
    separator = datePickerPropSeparatorDefault,
    placeholder = datePickerPropPlaceholderTypeYear,
    onChange,
    onError,
    minDate = minDateDefault,
    maxDate = maxDateDefault,
    value,
    inputRef: inputRefProp,
    defaultValue,
    ...otherProps
  } = props;

  const inputRef = usePicker({
    value,
    minDate,
    maxDate,
    onChange,
    onError,
    separator,
    format,
  });

  return (
    <TextField
      {...otherProps}
      type="text"
      inputContainerRef={ref}
      inputRef={useForkRef([inputRef, inputRefProp])}
      placeholder={placeholder}
    />
  );
});
