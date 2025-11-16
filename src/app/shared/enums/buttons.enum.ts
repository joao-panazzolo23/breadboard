export enum ButtonTypes {
  edit = "edit",
  delete = "delete",
  save = "save",
  warning = "warning",
  Confirm = "confirm",
}


export const ButtonLabels: Record<ButtonTypes, string> = {
  confirm: 'Confirmar',
  delete: 'Excluir',
  edit: 'Editar',
  save: 'Salvar',
  warning: '?',
};
