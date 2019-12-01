import React from 'react';

import Input from 'styledComponents/Input';
import Textarea from 'styledComponents/Textarea';
import InputRow from 'styledComponents/InputRow';
import Label from 'styledComponents/Label';
import ButtonContainer from 'styledComponents/ButtonContainer';
import Button from 'styledComponents/Button';
import Error from 'styledComponents/Error';

interface IProps {
  handleSubmit: any;
  handleChange: any;
  title: any;
  description: any;
  errorMessage: any;
}

const RecipesForm: React.FC<IProps> = ({ handleSubmit, handleChange, title, description, errorMessage }) => (
  <form onSubmit={handleSubmit}>
    <InputRow>
      <Label> Recipe name </Label>
      <Input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
      />
    </InputRow>
    <InputRow>
      <Label> Recipe description </Label>
      <Textarea
        name="description"
        value={description}
        onChange={handleChange}
      />
    </InputRow>
    <InputRow>
      {errorMessage && <Error>{errorMessage}</Error>}
    </InputRow>
    <ButtonContainer>
      <Button type="submit"> Add </Button>
    </ButtonContainer>
  </form>
);

export default RecipesForm;
