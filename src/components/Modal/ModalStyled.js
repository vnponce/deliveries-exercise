import { withStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { DialogActions } from '@material-ui/core';
import styled from 'styled-components';
import { colors, fontFamily, spacing } from '../../theme';

export const DialogStyled = withStyles({
  root: {
    fontFamily: fontFamily.main,
  },
})(Dialog);

export const DialogTitleStyled = withStyles({
  root: {
    padding: spacing.large,
    paddingBottom: 0,
    fontFamily: fontFamily.main,
  },
})(DialogTitle);

export const StyledDialogContent = withStyles({
  root: {
    padding: `0 ${spacing.large}`,
    fontFamily: fontFamily.main,
  },
})(DialogContent);

export const DialogActionsStyled = withStyles({
  root: {
    borderTop: `1px solid ${colors.inputBorder}`,
    fontFamily: fontFamily.main,
    padding: `${spacing.medium} ${spacing.large}`,
  },
})(DialogActions);

export const TitleStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CloseIconWrapper = styled.div`
  cursor: pointer;
`;
