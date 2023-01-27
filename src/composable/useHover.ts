
import { ref, computed } from 'vue';

export function useHover() {

// List of hover status of each cover image    
const hover = ref<boolean[]|[]>([])

// Handling mouseEvent when enter or leave
  const mouseEvent = (event: "enter" | "leave", e: any, i: number) => {
 
    
    if (event === "leave") {
      e.target.style.opacity = 1;
      hover.value[i] = false;
    
    } else {
      e.target.style.opacity = 0.9;

      hover.value[i] = true;
    }
  }; 

  // Style of element when hover occurs
  const overlayStyle = computed(() => {
    return {
      opacity: 0.7,
      backgroundColor: "#111",
    };
  });

  return {
    mouseEvent,
    hover,
    overlayStyle
  }
}
