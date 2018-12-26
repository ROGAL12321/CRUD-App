import React from 'react';
import PropTypes from 'prop-types';

import Input from 'styledComponents/Input';
import Textarea from 'styledComponents/Textarea';
import InputRow from 'styledComponents/InputRow';
import Label from 'styledComponents/Label';
import ButtonContainer from 'styledComponents/ButtonContainer';
import Button from 'styledComponents/Button';
import Error from 'styledComponents/Error';

const RecipesForm = ({ handleSubmit, handleChange, title, description, errorMessage }) => (
  <form onSubmit={handleSubmit}>
    <InputRow>
      <Label> Recipe name </Label>
      <Input
        type="text"
        name="title"
        defaultValue={title}
        onChange={handleChange} 
      />
    </InputRow>
    <InputRow>
      <Label> Recipe description </Label>
      <Textarea
        name="description"
        defaultValue={description}
        onChange={handleChange}
      />
    </InputRow>
    <InputRow>
      {
        errorMessage
          ? <Error>{errorMessage}</Error>
          : null
      }
    </InputRow>          
    <ButtonContainer>
      <Button type="submit"> Add </Button> 
    </ButtonContainer>
  </form>
);

RecipesForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  errorMessage: PropTypes.string
}

export default RecipesForm;
