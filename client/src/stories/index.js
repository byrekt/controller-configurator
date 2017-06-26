import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import Welcome from './Welcome';
import Icon from '../components/Icon'
import Cross from '../components/Cross';
import Palette from '../components/Palette';
import CrossBar from '../components/CrossBar';
import CharacterSet from '../components/CharacterSet';
import ActionList from '../mocks/actions';
import Jobs from '../mocks/jobs';
import BardSet from '../mocks/bardSet';
import AstrologianSet from '../mocks/astrologianSet';

const wandererMinuet = ActionList.filter((action => action.id === 3559))[0];
const magesBallad = ActionList.filter((action => action.id === 114))[0];
const armysPeon = ActionList.filter((action => action.id === 116))[0];
const foeRequiem = ActionList.filter((action => action.id === 115))[0];
const bardJob = Jobs.filter(job => job.icon === 'bard')[0];
const bardAbilities = ActionList.filter((action) => (action.classjob === bardJob.id || action.classjob === bardJob.classjob_parent) && action.icon);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Icon', module)
  .add('Empty Icon', () => <Icon/>)
  .add('The Wanderer\'s Minuet', () => <span><Icon icon={wandererMinuet} /></span>)
  .add('Bard Songs', () => (
     <div>
       <Icon icon={wandererMinuet} />
       <Icon icon={magesBallad} />
       <Icon icon={armysPeon} />
       <Icon icon={foeRequiem} />
     </div>
  ));

storiesOf('Cross', module)
  .add('Empty Cross', () => <Cross />)
  .add('Bard Songs', () => <Cross leftIcon={wandererMinuet} topIcon={magesBallad} bottomIcon={armysPeon} rightIcon={foeRequiem}/>)
  .add('Some Songs', () => <Cross topIcon={magesBallad} rightIcon={foeRequiem}/>)

storiesOf('Palettes', module)
  .add('Bard Palette', () => <Palette name="Bard" iconList={bardAbilities}/>)

storiesOf('CrossBar', module)
  .add('Single Regular Sized Cross Bar', () => <CrossBar name={BardSet.crossBars[0].name} crosses={BardSet.crossBars[0].crosses}/>)
  .add('Single Small Cross Bar', () => <CrossBar name={BardSet.crossBars[1].name} crosses={BardSet.crossBars[1].crosses}/>)
  .add('Single Mini Cross Bar', () => <CrossBar name={BardSet.crossBars[2].name} crosses={BardSet.crossBars[2].crosses}/>)

storiesOf('CharacterSet', module)
  .add('Bard Set', () => <CharacterSet name={BardSet.name} crossBars={BardSet.crossBars}/>)
  .add('The Astrologian', () => <CharacterSet name={AstrologianSet.name} crossBars={AstrologianSet.crossBars}/>)