import React from 'react';
import PropTypes from 'prop-types';
import Close from 'svgs/icons/Close';
import {
  CloseIconWrapper,
  DialogActionsStyled,
  DialogStyled,
  DialogTitleStyled,
  StyledDialogContent,
  TitleStyled,
} from './ModalStyled';

const Modal = ({
  children,
  handleClose,
  isOpen,
  title,
  footerActions,
  width = 'md',
}) => (
  <DialogStyled fullWidth maxWidth={width} open={isOpen} onClose={handleClose} scroll="paper">
    <DialogTitleStyled onClose={handleClose}>
      <TitleStyled>
        {title}
        <CloseIconWrapper onClick={handleClose}>
          <Close />
        </CloseIconWrapper>
      </TitleStyled>
    </DialogTitleStyled>
    <StyledDialogContent>
      {children}
    </StyledDialogContent>
    <DialogActionsStyled>
      {footerActions}
    </DialogActionsStyled>
  </DialogStyled>
);

Modal.propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  width: PropTypes.string,
  footerActions: PropTypes.node,
};

export default Modal;
