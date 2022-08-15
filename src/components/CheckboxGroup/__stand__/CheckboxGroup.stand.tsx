import { createStand } from '##/stand/standConfig';

import image from './CheckboxGroup.image.svg';

export default createStand({
  title: 'CheckboxGroup',
  id: 'CheckboxGroup',
  group: 'components',
  image,
  description: 'Группа чекбоксов. Можно выбрать несколько вариантов.',
  version: '4.0.0',
  status: 'stable',
  sandbox:
    'https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark',
  figma:
    'https://www.figma.com/embed?embed_host=uikit.consta.design&url=https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=56%3A37365',
  order: 10,
});
