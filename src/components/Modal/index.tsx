import { useTheme } from "@emotion/react";
import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { KeyboardAvoidingView, TouchableOpacityProps } from "react-native";
import { Modalize } from "react-native-modalize";
import { Container, Title, Button, FieldName, TextButton } from "./styles";

type EditTaskProps = TouchableOpacityProps & {
  description: string;
};

const EditTask: ForwardRefRenderFunction<Modalize, EditTaskProps> = (
  { description, ...rest },
  ref
) => {
  const { colors } = useTheme();
  return (
    <Modalize
      ref={ref}
      handleStyle={{
        display: "none",
      }}
      modalStyle={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
      adjustToContentHeight
      keyboardAvoidingBehavior="padding"
      keyboardAvoidingOffset={30}
    >
      <Container>
        <Title>Clique no texto para editar</Title>
        <FieldName value={description} />
        <Button {...rest}>
          <TextButton>Editar</TextButton>
        </Button>
      </Container>
    </Modalize>
  );
};

export default forwardRef(EditTask);
