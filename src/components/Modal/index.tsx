import { useTheme } from "@emotion/react";
import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { TouchableOpacityProps, TextInputProps } from "react-native";
import { Modalize } from "react-native-modalize";
import { Container, Title, Button, FieldName, TextButton } from "./styles";

type EditTaskProps = RootEditTaskProps;

type RootEditTaskProps = TouchableOpacityProps & TextInputProps;

const EditTask: ForwardRefRenderFunction<Modalize, EditTaskProps> = (
  { ...rest },
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
        <FieldName {...rest} />
        <Button {...rest}>
          <TextButton>Editar</TextButton>
        </Button>
      </Container>
    </Modalize>
  );
};

export default forwardRef(EditTask);
