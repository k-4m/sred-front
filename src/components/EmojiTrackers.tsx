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
import { useStoreState } from '../store';

type tEmojiTrackersProps = {
  // pass
};

export const EmojiTrackers: React.FC<tEmojiTrackersProps> = () => {
  const emotions = useStoreState((store) => store.emotion.current);
  const sortedEmotions = Object.entries(emotions).sort(([, a], [, b]) => b - a);

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
              {sortedEmotions.map(([emotion, value], i) => (
                <TableRow key={emotion}>
                  <TableCell>
                    <Text color={i === 0 ? 'status-ok' : 'status-unknown'}>{emotion}</Text>
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
                          value,
                          color: i > 0 ? 'status-unknown' : 'status-ok',
                          label: value.toFixed(2),
                          highlight: i === 0,
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
