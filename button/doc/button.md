<script setup>
import { Button } from '../../index';


</script>

# Button

The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

## Props

<Props :of="Button"></Props>

## Button Type Variants

#### Primary

<Playground 
  code="<Button variant='primary'>Click me</Button>"
  :components="{ Button }">
</Playground>


#### Default

<Playground 
  code="<Button variant='default'>Click me</Button>"
  :components="{ Button }">
</Playground>


#### Dashed

<Playground 
  code="<Button variant='dashed'>Click me</Button>"
  :components="{ Button }">
</Playground>


#### Text

<Playground 
  code="<Button variant='text'>Click me</Button>"
  :components="{ Button }">
</Playground>

#### Link

<Playground 
  code="<Button variant='link'>Click me</Button>"
  :components="{ Button }">
</Playground>


## Button Shape
#### Circle

<Playground 
  code="<Button variant='primary' shape='circle' loading></Button>"
  :components="{ Button }">
</Playground>

#### round

<Playground 
  code="<Button loading></Button>"
  :components="{ Button }">
</Playground>

## Button State
#### Loading

<Playground 
  code="<Button variant='primary' loading></Button>"
  :components="{ Button }">
</Playground>

#### Danger

<Playground 
  code="<Button variant='primary' danger>Click me</Button>"
  :components="{ Button }">
</Playground>

#### Ghost

<Playground 
  code="<Button variant='primary' ghost>Click me</Button>"
  :components="{ Button }">
</Playground>

#### Disable

<Playground 
  code="<Button variant='primary' disabled>Click me</Button>"
  :components="{ Button }">
</Playground>

#### Disabled but Loading

<Playground 
  code="<Button danger shape='round' loading disabled></Button>"
  :components="{ Button }">
</Playground>
