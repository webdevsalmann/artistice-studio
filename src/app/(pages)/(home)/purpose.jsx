import FadeLeft from "@/components/animaitons/FadeLeft";
import FadeRight from "@/components/animaitons/FadeRight";
import FadeUp from "@/components/animaitons/FadeUp";
import PurposeImageCard from "@/components/cards/purpose-image-card";
import SparkleText from "@/components/helper/SparkleText";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, BarChart4, Layers, MonitorSmartphone, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function purpose() {
  return (
    <section className="bg-section-secondary">
      <div className="relative section-wrapper grid md:grid-cols-2 gap-block">
        {/* Image */}
        <FadeUp>
          <div className="md:sticky top-block w-full h-fit grid grid-cols-3 gap-base">
            <PurposeImageCard imageUrl="/images/services/photo-shoot/product/1.png"/>
            <PurposeImageCard imageUrl="/images/services/photo-shoot/product/7.png"/>
            <PurposeImageCard imageUrl="/images/services/photo-shoot/product/11.png"/>
            <PurposeImageCard imageUrl="/images/services/photo-shoot/product/16.png"/>
            <PurposeImageCard imageUrl="/images/services/photo-shoot/product/24.png"/>
            <PurposeImageCard imageUrl="/images/services/photo-shoot/product/30.jpg"/>
            <PurposeImageCard imageUrl="/images/services/photo-shoot/product/3.png"/>
            <PurposeImageCard imageUrl="/images/services/photo-shoot/product/15.png"/>
            <PurposeImageCard imageUrl="/images/services/photo-shoot/product/22.png"/>
          </div>
        </FadeUp>

        {/* Details */}
        <div>
          <FadeUp>
            <h2 className="text-2xl md:text-3xl md:text-left">Transform Your Brand with <SparkleText text="Stunning Visuals" /> Stand Out and Engage Your Audience .</h2>
          </FadeUp>

          <div>
            <FadeUp>
              <p className="mt-4">Many businesses face the challenge of low engagement and visibility on social media, often due to a lack of high-quality visual content and expertise in creating it.</p>
            </FadeUp>
            <FadeUp>
              <p className="mt-4">Without professional photos, graphics, and videos, your posts can get lost in the crowded online space, making it hard for your brand to stand out and attract attention.</p>
            </FadeUp>
            <FadeUp>
              <p className="mt-4"><i>Artistice-Studio provides top-notch photoshoots, graphic design, and video editing services tailored to enhance your social media presence, ensuring your content captivates and engages your audience.</i></p>
            </FadeUp>
          </div>

          <div className="mt-base">
            <FadeLeft>
              <div className="flex gap-4 items-center leading-10">
                <Sparkles className="inline size-base text-primary shrink-0" />
                <div>High Quality Assets</div>
              </div>
            </FadeLeft>

            <FadeLeft>
              <div className="flex gap-4 items-center leading-10">
                <Layers className="inline size-base text-primary shrink-0" />
                <div>More Engagement</div>
              </div>
            </FadeLeft>

            <FadeLeft>
              <div className="flex gap-4 items-center leading-10">
                <BarChart4 className="inline size-base text-primary shrink-0" />
                <div>More Conversion</div>
              </div>
            </FadeLeft>
          </div>

          <div className="mt-base">
            <FadeLeft>
              <Link className={`${buttonVariants({ variant: "outline" })} hover:bg-primary hover:text-black group`} href="/about">
                About Myself <ArrowRight className="ml-2 group-hover:ml-4 transition-all size-4 inline" />
              </Link>
            </FadeLeft>
          </div>
        </div>
      </div>
    </section>
  )
}
