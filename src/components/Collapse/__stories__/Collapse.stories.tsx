import React, { useState } from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { IconAdd } from '../../../icons/IconAdd/IconAdd';
import { IconRemove } from '../../../icons/IconRemove/IconRemove';
import { IconSun } from '../../../icons/IconSun/IconSun';
import { getByMap } from '../../../utils/getByMap';
import { createMetadata } from '../../../utils/storybook';
import { Badge } from '../../Badge/Badge';
import {
  Collapse,
  collapsePropCloseDirectionIconDefault,
  collapsePropDirectionIcon,
  collapsePropDirectionIconDefault,
  collapsePropHorizontalSpace,
  collapsePropSize,
  collapsePropSizeDefault,
  collapsePropView,
  collapsePropViewDefault,
  sizeIconMap,
} from '../Collapse';

import mdx from './Collapse.docs.mdx';

const defaultKnobs = () => ({
  size: select('size', collapsePropSize, collapsePropSizeDefault),
  label: text('label', 'Заголовок'),
  children: text(
    'children',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ),
  iconPosition: select('iconPosition', ['left', 'right'], 'left'),
  hoverEffect: boolean('hoverEffect', false),
  view: select('view', collapsePropView, collapsePropViewDefault),
  divider: boolean('divider', false),
  horizontalSpace: select(
    'horizontalSpace',
    collapsePropHorizontalSpace,
    collapsePropHorizontalSpace[0],
  ),
  rightSide: boolean('rightSide', false),
  directionIcon: select(
    'directionIcon',
    collapsePropDirectionIcon,
    collapsePropDirectionIconDefault,
  ),
  closeDirectionIcon: select(
    'closeDirectionIcon',
    collapsePropDirectionIcon,
    collapsePropCloseDirectionIconDefault,
  ),
  withCustomIcon: boolean('withCustomIcon', false),
});

export function Playground() {
  const {
    size,
    label,
    hoverEffect,
    iconPosition,
    withCustomIcon,
    view,
    divider,
    horizontalSpace,
    rightSide,
    directionIcon,
    closeDirectionIcon,
    children,
  } = defaultKnobs();
  const [isOpen, setOpen] = useState<boolean>(false);

  const defaultRightSide: React.ReactNode = [
    <Badge label="Статус" size="s" />,
    <IconSun size={getByMap(sizeIconMap, size)} />,
  ];

  return (
    <Collapse
      size={size}
      label={label}
      isOpen={isOpen}
      onClick={() => setOpen(!isOpen)}
      hoverEffect={hoverEffect}
      view={view}
      divider={divider}
      horizontalSpace={horizontalSpace}
      style={{ maxWidth: 300 }}
      {...(iconPosition === 'left'
        ? {
            iconPosition,
            rightSide: rightSide ? defaultRightSide : undefined,
          }
        : { iconPosition })}
      {...(withCustomIcon
        ? {
            icon: IconAdd,
            closeIcon: IconRemove,
          }
        : {
            directionIcon,
            closeDirectionIcon,
          })}
    >
      {children}
    </Collapse>
  );
}

export default createMetadata({
  title: 'Компоненты|/Отображение данных/Collapse',
  id: 'components/Collapse',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=12734%3A116504',
    },
  },
});
