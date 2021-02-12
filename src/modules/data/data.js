function data() {
  const users = [
    {
      name: 'Martin',
      id: '1',
      multiple: true,
      default: false,
    },
    {
      name: 'Mira',
      id: '2',
      multiple: true,
      default: false,
    },
    {
      name: 'Ben',
      id: '3',
      multiple: true,
      default: false,
    },
    {
      name: 'Adriana',
      id: '4',
      multiple: true,
      default: false,
    },
    {
      name: 'All members',
      id: '5',
      multiple: false,
      default: true,
    },
  ];
  const time = [
    {
      name: '10:00',
      id: '1',
      multiple: false,
      default: true,
    },
    {
      name: '11:00',
      id: '2',
      multiple: false,
      default: false,
    },
    {
      name: '12:00',
      id: '3',
      multiple: false,
      default: false,
    },
    {
      name: '13:00',
      id: '4',
      multiple: false,
      default: false,
    },
    {
      name: '14:00',
      id: '5',
      multiple: false,
      default: false,
    },
    {
      name: '15:00',
      id: '6',
      multiple: false,
      default: false,
    },
    {
      name: '16:00',
      id: '7',
      multiple: false,
      default: false,
    },
    {
      name: '17:00',
      id: '8',
      multiple: false,
      default: false,
    },
    {
      name: '18:00',
      id: '9',
      multiple: false,
      default: false,
    },
  ];
  const days = [
    {
      name: 'Monday',
      id: '1',
      multiple: false,
      default: true,
    },
    {
      name: 'Tuesday',
      id: '2',
      multiple: false,
      default: false,
    },
    {
      name: 'Wednesday',
      id: '3',
      multiple: false,
      default: false,
    },
    {
      name: 'Thursday',
      id: '4',
      multiple: false,
      default: false,
    },
    {
      name: 'Friday',
      id: '5',
      multiple: false,
      default: false,
    },
  ];
  const columns = new Map([
    [
      'Time',
      [
        { value: '10:00', id: '1' },
        { value: '11:00', id: '2' },
        { value: '12:00', id: '3' },
        { value: '13:00', id: '4' },
        { value: '14:00', id: '5' },
        { value: '15:00', id: '6' },
        { value: '16:00', id: '7' },
        { value: '17:00', id: '8' },
        { value: '18:00', id: '9' },
      ],
    ],
    [
      'Mon',
      [
        { value: '', id: '1', users: [] },
        { value: '', id: '2', users: [] },
        { value: '', id: '3', users: [] },
        { value: '', id: '4', users: [] },
        { value: '', id: '5', users: [] },
        { value: '', id: '6', users: [] },
        { value: '', id: '7', users: [] },
        { value: '', id: '8', users: [] },
        { value: '', id: '9', users: [] },
      ],
    ],
    [
      'Tue',
      [
        { value: '', id: '1', users: [] },
        { value: '', id: '2', users: [] },
        { value: '', id: '3', users: [] },
        { value: '', id: '4', users: [] },
        { value: '', id: '5', users: [] },
        { value: '', id: '6', users: [] },
        { value: '', id: '7', users: [] },
        { value: '', id: '8', users: [] },
        { value: '', id: '9', users: [] },
      ],
    ],
    [
      'Wed',
      [
        { value: '', id: '1', users: [] },
        { value: '', id: '2', users: [] },
        { value: '', id: '3', users: [] },
        { value: '', id: '4', users: [] },
        { value: '', id: '5', users: [] },
        { value: '', id: '6', users: [] },
        { value: '', id: '7', users: [] },
        { value: '', id: '8', users: [] },
        { value: '', id: '9', users: [] },
      ],
    ],
    [
      'Thu',
      [
        { value: '', id: '1', users: [] },
        { value: '', id: '2', users: [] },
        { value: '', id: '3', users: [] },
        { value: '', id: '4', users: [] },
        { value: '', id: '5', users: [] },
        { value: '', id: '6', users: [] },
        { value: '', id: '7', users: [] },
        { value: '', id: '8', users: [] },
        { value: '', id: '9', users: [] },
      ],
    ],
    [
      'Fri',
      [
        { value: '', id: '1', users: [] },
        { value: '', id: '2', users: [] },
        { value: '', id: '3', users: [] },
        { value: '', id: '4', users: [] },
        { value: '', id: '5', users: [] },
        { value: '', id: '6', users: [] },
        { value: '', id: '7', users: [] },
        { value: '', id: '8', users: [] },
        { value: '', id: '9', users: [] },
      ],
    ],
  ]);

  const result = {
    time,
    users,
    days,
    columns,
  };

  return result;
}

export default data;
