import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import "@/global";

export default function TabThreeScreen() {
  return (
    <View className="flex flex-col bg-white items-cente h-full justify-center ">
      <Text className="text-5xl text-center mb-10 font-extrabold">Tab Three, penesote</Text>
      <View />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}
