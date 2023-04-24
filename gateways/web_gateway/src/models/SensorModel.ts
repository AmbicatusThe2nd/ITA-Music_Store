import StringVibrationAmplitude from "./StringVibrationAmplitude";

class SensorModel {
  sensor_type?: string;
  manufacturer?: string;
  model?: string;
  serial_number?: string;
  timestamp?: string;
  notes_per_minute: number | undefined;
  loudness: number | undefined;
  string_vibration_amplitude?: StringVibrationAmplitude;
}

export default SensorModel;
