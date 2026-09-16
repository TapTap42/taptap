import {notFound} from "next/navigation";
import {supabase} from "@/lib/supabase";
import TapClient from "./tap-client";
export default async function ReviewPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const {data:business}=await supabase.from("businesses").select("*").eq("slug",slug).single();if(!business)notFound();return <TapClient business={business}/>;}
