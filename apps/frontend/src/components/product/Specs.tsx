import { IconTag } from "@tabler/icons-react";
import { Product } from "@/core";
import Tag from "../shared/Tag";

export interface SpecsProps {
  product: Product;
}

const Specs = ({ product }: SpecsProps) => {
  return product ? (
    <div className="flex-1 flex flex-col gap-1">
      <div className="flex mb-3">
        <Tag label={product.specs.featured!} icon={IconTag} outlined />
      </div>
      {product?.specs &&
        Object.keys(product.specs)
          .filter((k) => k !== "featured")
          .map((key) => (
            <div key={key} className="flex gap-1">
              <span className="p-2 w-1/3 bg-white/5 rounded">{key}</span>
              <span className="p-2 w-2/3 bg-white/5 rounded">
                {product.specs[key]}
              </span>
            </div>
          ))}
    </div>
  ) : null;
};

export default Specs;
