import Clipboard from 'react-native-clipboard';
import { TextInput, Button } from 'react-native';

export default function ClipboardExample() {
  const [text, setText] = useState('');
  
  const handleCopy = () => {
    Clipboard.setString(text);
  }
  
  const handlePaste = async () => {
    const copiedText = await Clipboard.getString();
    setText(copiedText);
  }

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
      />
      <Button title="Copy" onPress={handleCopy} />
      <Button title="Paste" onPress={handlePaste} />
    </View>
  );
}
