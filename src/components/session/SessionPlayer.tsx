import { createPortal } from 'react-dom';
import { useSessionPlayer } from '../../hooks/useSessionPlayer';
import { SessionPlayerView } from './SessionPlayerView';
import type { SessionPlayerConfig } from './types';

export function SessionPlayer(props: SessionPlayerConfig) {
  const controller = useSessionPlayer(props);

  if (!props.open) return null;

  return createPortal(
    <SessionPlayerView
      videoSrc={props.videoSrc}
      attractMode={props.attractMode}
      title={props.title}
      step={props.step}
      currentStepLabel={props.currentStepLabel}
      nextStepLabel={props.nextStepLabel}
      accent={props.accent}
      className={props.className}
      {...controller}
    />,
    document.body,
  );
}
