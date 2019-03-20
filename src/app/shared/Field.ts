export class Field {
  value: string;
  label: string;
  type: string;

  constructor(options: {
    value?: string,
    label?: string,
    type?: string,
  } = {}) {
    this.value = options.value || '';
    this.label = options.label || '';
    this.type = options.type || 'text';
  }
}
