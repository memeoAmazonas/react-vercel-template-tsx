import { Skeleton, Stack } from '@mui/material';

export type LoadingProps = { width?: number | string; height?: number | string };

export default function Loading({ height = 30, width = '50vw' }: LoadingProps) {
  return (
    <Stack>
      <Skeleton width={width} height={height} />
      <Skeleton width={width} height={height} />
    </Stack>
  );
}
