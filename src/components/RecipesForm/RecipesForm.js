import React from 'react';

import Input from 'blocks/Input';
import Textarea from 'blocks/Textarea';
import InputRow from 'blocks/InputRow';
import Label from 'blocks/Label';
import ButtonContainer from 'blocks/ButtonContainer';
import Button from 'blocks/Button';

const RecipesForm = ({ handleSubmit, handleChange, recipe }) => (
  <form onSubmit={handleSubmit}>
    <InputRow>
      <Label> Recipe name </Label>
      <Input
        type="text"
        name="title"
        defaultValue={recipe ? recipe.title : null}
        onChange={handleChange} 
      />
    </InputRow>
    <InputRow>
      <Label> Recipe description </Label>
      <Textarea
        name="description"
        defaultValue={recipe ? recipe.description : null}
        onChange={handleChange}
      />
    </InputRow>                
    <ButtonContainer>
      <Button type="submit"> Add </Button> 
    </ButtonContainer>
  </form>
);

export default RecipesForm;
