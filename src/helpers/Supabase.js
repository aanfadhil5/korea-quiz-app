import { supabase } from "../SupabaseClient";

export const getCourses = async () => {
  try {
    let { data, error, status } = await supabase
      .from("courses")
      .select(`name,description,module,hours,days`)
      .order("created_at", { ascending: false });

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      return data;
    }
  } catch (error) {
    alert(error.message);
  } finally {
  }
};
