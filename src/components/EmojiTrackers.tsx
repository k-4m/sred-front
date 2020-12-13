import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Meter,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Text,
  ThemeContext,
} from 'grommet';
import React from 'react';

type tEmojiTrackersProps = {
  // pass
};

export const EmojiTrackers: React.FC<tEmojiTrackersProps> = () => {
  const data = [
    { name: 'страх', value: Math.random() * 100 },
    { name: 'страх', value: Math.random() * 100 },
    { name: 'страх', value: Math.random() * 100 },
    { name: 'страх', value: Math.random() * 100 },
    { name: 'страх', value: Math.random() * 100 },
  ];

  return (
    <ThemeContext.Extend
      value={{
        card: {
          footer: {
            pad: { horizontal: 'medium', vertical: 'small' },
            background: '#00000027',
          },
        },
      }}
    >
      <Card round background='white' elevation='large' fill='horizontal'>
        <CardBody pad='small'>
          <Table>
            <TableBody>
              {data.map((datum) => (
                <TableRow key={datum.name}>
                  <TableCell>
                    <Text>{datum.name}</Text>
                  </TableCell>
                  <TableCell>
                    <Meter
                      alignSelf='start'
                      background='light-2'
                      thickness='medium'
                      type='bar'
                      round
                      values={[
                        {
                          value: datum.value,
                          color: 'brand',
                        },
                      ]}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
        <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
          <Heading level={2} margin='none' size='small'>
            Emotions
          </Heading>
        </CardFooter>
      </Card>
    </ThemeContext.Extend>
  );
};
