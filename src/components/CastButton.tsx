interface CastButtonProps {
  isAvailable: boolean;
  isConnected: boolean;
  deviceName: string | null;
}

export function CastButton({ isAvailable, isConnected, deviceName }: CastButtonProps) {
  if (!isAvailable) return null;

  return (
    <div className="flex items-center gap-2">
      {isConnected && deviceName && (
        <span className="text-[9px] text-white/40 tracking-wider hidden md:inline">
          {deviceName}
        </span>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: '<google-cast-launcher></google-cast-launcher>' }}
        style={{
          display: 'inline-block',
          width: '24px',
          height: '24px',
          cursor: 'pointer',
        }}
      />
    </div>
  );
}
